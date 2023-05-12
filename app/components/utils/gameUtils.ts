export const calculateDistance = (
  marker1: Coordinates,
  marker2: Coordinates
) => {
  if (!marker1 || !marker2) return null;
  const p = 0.017453292519943295;
  const c = Math.cos;
  const a =
    0.5 -
    c((marker2.lat - marker1.lat) * p) / 2 +
    (c(marker1.lat * p) *
      c(marker2.lat * p) *
      (1 - c((marker2.lng - marker1.lng) * p))) /
      2;
  const distance = 12742 * Math.asin(Math.sqrt(a));
  return distance;
};

export const formatDistance = (distance: number | null) => {
  if (!distance) return null;
  const formatDistance =
    distance >= 100
      ? `${distance.toFixed(0)}km`
      : distance >= 1
      ? `${distance.toFixed(1)}km`
      : `${(distance * 1000).toFixed(0)}m`;

  return formatDistance;
};

export const calculateYearsScore = (year1: number, year2: number) => {
  const difference = calculateYearsDifference(year1, year2);
  if (difference === 0) return 5000;
  const cut = 50 * Math.pow(difference, 2);
  if (cut > 5000) return 0;
  return 5000 - cut;
};

export const calculateYearsDifference = (year1: number, year2: number) => {
  return Math.abs(year2 - year1);
};

export const calculateDistanceScore = (distance: number | null) => {
  if (!distance) return null;
  if (distance < 1) return 5000;
  const cut = distance * 10;
  if (cut > 5000) return 0;
  return 5000 - distance * 10;
};