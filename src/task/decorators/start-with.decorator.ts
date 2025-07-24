import { registerDecorator, type ValidationOptions, type ValidationArguments } from "class-validator";

export function StartsWith(
    prefix: string,
    validationOption?: ValidationOptions) {
    return (object: Object, propertyName: string) => {
        registerDecorator({
            name: 'startsWith',
            target: object.constructor,
            propertyName,
            options: validationOption,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return typeof value === 'string' && value.startsWith(prefix);
                },
                defaultMessage(args: ValidationArguments) {
                    return `Название должно начинаться с "${prefix}"`
                }
            }
        })
    }
}