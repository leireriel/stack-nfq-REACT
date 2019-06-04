import moment from 'moment';

const formatDate = dateToFormat => {
  const dateArr = dateToFormat.split('T');
  dateArr[0] = moment(dateArr[0]).format('DD/MM/YYYY');
  return `Formulada el día ${dateArr[0]} a las ${dateArr[1]}`;
};

export { formatDate };
