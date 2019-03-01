const FormatTime = {
  format12: date => {
    date = new Date(date);

    let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let am_pm = date.getHours() >= 12 ? 'PM' : 'AM';
    hours = hours < 10 ? '0' + hours : hours;
    let minutes =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    return `${hours}:${minutes} ${am_pm}`;
  },

  format24: date => {
    date = new Date(date);
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return `${hours}:${minutes}`;
  }
};

//NOT FINISHED NEED SOME FIXES

export const formatDate = (date = new Date(), format = '12') => {
  date = new Date(date).getTime();

  let diff = new Date() - date; // the difference in milliseconds

  if (diff < 1000) {
    // less than 1 second
    return 'right now';
  }

  let sec = Math.floor(diff / 1000); // convert diff to seconds

  if (sec < 60) {
    return sec + ' sec. ago';
  }

  let min = Math.floor(diff / 60000); // convert diff to minutes
  if (min < 60) {
    return min + ' min. ago';
  }

  return FormatTime[`format${format}`](date);
};
