import * as yup from 'yup';

const MAX_LENGTH = 50;
const MIN_LOGIN_LENGTH = 5;
const MIN_PASSWORD_LENGTH = 8;

const allowedCharactersRegex = /^\s*[A-Za-z0-9!@#$&_*+\-.,]*\s*$/;
const startCyrilicRegex = /^\s*[А-ЯЁа-яё]/;
const onlyCyrilicRegex = /^(?!-)(?!.*--)[А-ЯЁа-яё\s]+(?:[- ][А-ЯЁа-яё]+)*$/;

const maxLengthMessage = `Максимальная длина ${MAX_LENGTH} символов`;
const startCyrilicMessage = 'Должно начинаться с кириллицы А-Я';
const onlyCyrilicMessage = 'Только кириллица А-Я, и "-"';
const invalidFormatMessage = 'Не соответствует формату';

const passwordField = yup
    .string()
    .required('Введите пароль')
    .max(MAX_LENGTH, maxLengthMessage)
    .min(MIN_PASSWORD_LENGTH, invalidFormatMessage)
    .matches(/[0-9]/, invalidFormatMessage)
    .matches(/[A-Z]/, invalidFormatMessage)
    .matches(allowedCharactersRegex, invalidFormatMessage);

const loginField = yup
    .string()
    .required('Введите логин')
    .min(MIN_LOGIN_LENGTH, invalidFormatMessage)
    .max(MAX_LENGTH, maxLengthMessage)
    .matches(allowedCharactersRegex, invalidFormatMessage);

export const emailField = yup
    .string()
    .required('Введите e-mail')
    .max(MAX_LENGTH, maxLengthMessage)
    .email('Введите корректный e-mail')
    .matches(
        /^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/,
        'Введите корректный e-mail',
    );

export const repeatPasswordField = yup
    .string()
    .required('Повторите пароль')
    .oneOf([yup.ref('password')], 'Пароли должны совпадать');

export const loginSchema = yup.object().shape({
    login: yup.string().required('Введите логин').max(MAX_LENGTH, maxLengthMessage),
    password: yup.string().required('Введите пароль').max(MAX_LENGTH, maxLengthMessage),
});

export const registrationSchema = yup.object().shape({
    firstName: yup
        .string()
        .required('Введите имя')
        .matches(startCyrilicRegex, startCyrilicMessage)
        .matches(onlyCyrilicRegex, onlyCyrilicMessage)
        .max(MAX_LENGTH, maxLengthMessage),
    lastName: yup
        .string()
        .required('Введите фамилию')
        .matches(startCyrilicRegex, startCyrilicMessage)
        .matches(onlyCyrilicRegex, onlyCyrilicMessage)
        .max(MAX_LENGTH, maxLengthMessage),
    email: emailField,
    login: loginField,
    password: passwordField,
    passwordRepeat: repeatPasswordField,
});

export const accountRecoverySchema = yup.object().shape({
    login: loginField,
    password: passwordField,
    passwordConfirm: repeatPasswordField,
});
