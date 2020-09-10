const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date(date));

export default formatDate;
