export const formatDate = (date: Date | string | number) => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};

export const formatByteSize = (bytes: number | string) => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let size = Number(bytes);
  for (const unit of units) {
    if (size < 1024) return `${size.toFixed(1)} ${unit}`;
    size /= 1024;
  }
  return `${size.toFixed(1)} PB`;
};

export const toTitleCase = (str?: string) => {
  if (!str || typeof str !== 'string') return '';

  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase(),
  );
};
