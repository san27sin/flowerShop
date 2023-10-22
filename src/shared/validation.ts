/**
 * Типы валидации входных параметров
 */
export enum Types {
    title,
    desc,
    url,
    phone,
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
        [Types.phone]: this.validatePhoneNumber
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

    private static validationClientError(errors: {condition: boolean, message: string}[]) {
        const errorMes: string[] = [];
        errors.forEach((error) => {
            if (error.condition) errorMes.push(error.message);
        });
        return errorMes;
    }
}