import * as yup from 'yup';

const MAX_LENGTH = 50;
const MIN_LOGIN_LENGTH = 5;
const MIN_PASSWORD_LENGTH = 8;

const startCyrilicRegex = /^[А-ЯЁа-яё]/;
const onlyCyrilicRegex = /^[А-ЯЁа-яё\s-]+$/;
const allowedCharactersRegex = /^[A-Za-z0-9!@#$&_*+\-.]+$/;

const maxLengthMessage = `Максимальная длина ${MAX_LENGTH} символов`;
const minLengthMessage = `Минимальная длина ${MIN_PASSWORD_LENGTH} символов`;
const startCyrilicMessage = 'Должно начинаться с кириллицы А-Я';
const onlyCyrilicMessage = 'Только кириллица А-Я, и "-"';
const invalidFormatMessage = 'Не соответствует формату';

const passwordField = yup
    .string()
    .required('Введите пароль')
    .min(MIN_PASSWORD_LENGTH, minLengthMessage)
    .matches(allowedCharactersRegex, invalidFormatMessage)
    .max(MAX_LENGTH, maxLengthMessage);

const loginField = yup
    .string()
    .required('Введите логин')
    .min(MIN_LOGIN_LENGTH, invalidFormatMessage)
    .matches(allowedCharactersRegex, invalidFormatMessage)
    .max(MAX_LENGTH, maxLengthMessage);

export const emailField = yup
    .string()
    .required('Введите e-mail')
    .email('Введите корректный e-mail')
    .max(MAX_LENGTH, maxLengthMessage);

export const repeatPasswordField = yup
    .string()
    .required('Повторите пароль')
    .oneOf([yup.ref('password')], 'Пароли должны совпадать');

export const loginSchema = yup.object().shape({
    login: loginField,
    password: passwordField,
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
    // passwordConfirm
    passwordRepeat: repeatPasswordField,
});

export const accountRecoverySchema = yup.object().shape({
    login: loginField,
    password: passwordField,
    passwordConfirm: repeatPasswordField,
});
