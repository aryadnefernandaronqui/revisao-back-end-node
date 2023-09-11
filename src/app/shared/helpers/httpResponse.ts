export interface IHttpResponse {
  statusCode: number;
  body: any;
}

class HttpResponse {
  static badRequest(error: Error): IHttpResponse {
    return {
      statusCode: 400,
      body: {
        success: false,
        data: {
          error: error.name,
          messages: [error.message],
        },
      },
    };
  }

  static notFound(error: Error): IHttpResponse {
    return {
      statusCode: 404,
      body: {
        success: false,
        data: {
          error: error.name,
          messages: [error.message],
        },
      },
    };
  }

  static serverError(error: any): IHttpResponse {
    return {
      statusCode: 500,
      body: {
        success: false,
        data: {
          error: error.name,
          messages: [error.message],
        },
      },
    };
  }

  static unauthorizedError(): IHttpResponse {
    return {
      statusCode: 401,
      body: {
        success: false,
        data: {
          error: 'unauthorizedError',
          messages: ['unauthorizedError'],
        },
      },
    };
  }

  static ok<T>(data: T): IHttpResponse {
    return {
      statusCode: 200,
      body: {
        success: true,
        data,
      },
    };
  }

  static created<T>(data: T): IHttpResponse {
    return {
      statusCode: 201,
      body: {
        success: true,
        data,
      },
    };
  }

  static noContent(): IHttpResponse {
    return {
      statusCode: 204,
      body: { success: true },
    };
  }
}

export { HttpResponse };
