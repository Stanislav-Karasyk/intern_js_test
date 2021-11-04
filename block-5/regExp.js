const phoneNumber = "+38(066)333-22-22";

const regexpPhoneNumber = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

// console.log(regexpPhoneNumber.test(phoneNumber));

// ==========

const email = "test.test@mega.zik.dj";

const regexpEmail =
  /^[a-zA-Z0-9]+(\.|-)?[a-zA-Z0-9]+@([a-zA-Z]+\.?[a-zA-Z])+\.[a-zA-Z]{2,6}$/;

// console.log(regexpEmail.test(email));

// ==========
const site = "http://test-test.dev";

const regexpSite = /^https?:\/\/[a-zA-Z0-9]+-?[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;

// console.log(regexpSite.test(site));

// ==========
const password = "abc_123";

const regexpPassword = /^[a-z0-9_]{6,25}$/;

// console.log(regexpPassword.test(password));

// ==========
const ipv4 = "255.255.255.255";

const regexpIpv = /^((\d{1}|\d{2}|[0-2][0-4]\d|[0-2][0-5][0-5])\.){3}((\d{1}|\d{2}|[0-2][0-4]\d|[0-2][0-5][0-5]))$/;

// console.log(regexpIpv.test(ipv4));
