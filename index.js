const truncatetxt = (str, length) => {

    if (length == null) {

      length = 100;

    }

    const ending = '...';

    if (str.length > length) {

      return str.substring(0, length - ending.length) + ending;

    } else {

      return str;

    }

};

module.exports = truncatetxt;