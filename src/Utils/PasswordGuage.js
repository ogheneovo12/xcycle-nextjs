/* eslint-disable no-useless-escape */
export default function checkPasswordStrength (pass) {
    // const pass = password.value;
    let strength

    // weak password
    let match = pass.match(/^(?=.*[a-z])|(?=.*[A-Z])|(?=.*[0-9])(?=.{1,})/);
    if (match) strength = 1;

    // fair password
    let digits = pass.match(
      /^((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[!@#\$%\^&\*]))|((?=.*[a-z])(?=.*[!@#\$%\^&\*]))|((?=.*[0-9])(?=.*[!@#\$%\^&\*]))(?=.{4,})/
    );
    if (digits) strength = 2;

    //good password
    let spec = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/
    );
    if (spec.test(pass)) strength = 3;

    // strong password
    let spec_1 = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    );
    if (spec_1.test(pass)) strength = 4;

    if (pass === "") strength = 0;

    switch (strength) {
      case 0:
        return ''
      case 1:
        return 'weak'
      case 2:
        return 'fair'
      case 3:
        return 'good';
      case 4:
        return 'strong'
      default:
        return ''
    }
  };