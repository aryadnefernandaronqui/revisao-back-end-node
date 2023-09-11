class InvalidParamError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidParamError';
  }
}

class MissingParamError extends Error {
  constructor(message: string) {
    super(`Missing param: ${message}`);
    this.name = 'MissingParamError';
  }
}

export { MissingParamError, InvalidParamError };
