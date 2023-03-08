interface Params<P> {
    payload: P;
}

export abstract class DomainEvent<P> {
    // public abstract static Name: string;

    public payload: P;

    public constructor({ payload }: Params<P>) {
        this.payload = payload;
    }
}
