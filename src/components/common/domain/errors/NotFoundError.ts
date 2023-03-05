import { ExistenceErrorParams, ExistenceError } from './ExistenceError';

class NotFoundError<T extends ExistenceErrorParams = {}> extends ExistenceError<T> {
    protected get defaultEndOfMessage(): string {
        return 'not found';
    }
}

const createEntityNotFoundError = (entityName: string) => (id: unknown) => new NotFoundError({ entityName, ...errorDataFromId(id)  });
const errorDataFromId = (id: unknown) => id instanceof Object ? { ...id } : { id };


export {
    NotFoundError,
    createEntityNotFoundError,
}
