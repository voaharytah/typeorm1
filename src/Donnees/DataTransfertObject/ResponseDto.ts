export class SuccessResponseDto {
    constructor(
        public data: any,
        public hasError?: boolean) { }
}

export class ErrorResponseDto {
    constructor(
        public errorMessage: string,
        public hasError: boolean,             
        public code? : number
    ){}

    toString() {
        return this.errorMessage;
    }
}