/**
 * Типы валидации входных параметров
 */
export enum Types {
    title,
    desc,
    url,
    phone,
    password,
    email,
    nickname
}

/**
 * класс Валидации
 */
export class Validation {
    inputs: {type: Types, value: string}[];
    types: { [key in Types]: Function } = {
        [Types.title]: this.validateTitle,
        [Types.desc]: this.validateDesc,
        [Types.url]: this.validateUrl,
        [Types.phone]: this.validatePhoneNumber,
        [Types.password]: this.validatePassword,
        [Types.email]: this.validateEmail,
        [Types.nickname]: this.validateNickname
    }

    constructor(inputs: { type: Types; value: string }[]) {
        this.inputs = inputs;
    }

    public validate() {
        const errorMessages: string[] = [];
        this.inputs.forEach(input => {
            if (this.types[input.type]) {
                errorMessages.push(
                    ...this.types[input.type](input.value)
                );
            }
        });
        return errorMessages;
    }

    private validateTitle(title: string) {
       return Validation.validationClientError([
                {condition: title.length < 2, message: "Название содержит меньше 2 символов!"},
                {condition: title.length > 15, message: "Название содержит больше 15 символов!"},
       ]);
    }

    private validateDesc(desc: string) {
        return Validation.validationClientError([
                {condition: desc.length < 10, message: "Описание содержит меньше 10 символов!"},
                {condition: desc.length > 200, message: "Описание содержит больше 200 символов!"},
        ]);
    }

    private validateUrl(url: string) {
        return Validation.validationClientError([
                {condition: !/^(http|https):\/\/([\w-]+(\.[\w-]+)+)(\/[\w-./?%&=]*)?$/.test(url), message: "Некорректная ссылка!"},
        ]);
    }

    private validatePhoneNumber(phone: string) {
        return Validation.validationClientError([
            {condition: !/^((\+7|7|8)+([0-9]){10})$/.test(phone), message: 'Некорректный номер телефона!'}
        ])
    }
    
    private validatePassword(password: string) { // "Abcdefg1"
        return Validation.validationClientError([
            {condition: !/.{8,}/.test(password), message: "Минимальная длина пароля 8 символов"},
            {condition: !/.*\d.*/.test(password), message: "В пароле должна быть одна цифра"},
            {condition: !/.*[a-z].*/.test(password), message: "В пароле должна быть хотя бы одна буква в нижнем регистре"},
            {condition: !/.*[A-Z].*/.test(password), message: "В пароле должна быть хотя бы одна буква в верхнем регистре"}
        ])
    }
    
    private validateEmail(email: string) {
        return Validation.validationClientError([
            {condition: !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email), message: "email невалидный"}
        ])
    }
    
    private validateNickname(nickname: string) {
        return Validation.validationClientError([
            {
                condition: !/^[a-zA-Z0-9_-]{3,20}$/.test(nickname),
                message: "Nickname невалиден. Никнейм должен содержать только буквы, цифры, подчеркивания и дефисы, и иметь длину от 3 до 20 символов."
            }
        ])
    }

    private static validationClientError(errors: {condition: boolean, message: string}[]) {
        const errorMes: string[] = [];
        errors.forEach((error) => {
            if (error.condition) errorMes.push(error.message);
        });
        return errorMes;
    }
}