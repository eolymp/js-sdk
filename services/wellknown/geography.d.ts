interface Client {
    call<R, E, O>(method: string, args: R, opts: O): Promise<E>;
}
export declare class Geography {
    private readonly cli;
    constructor(cli: Client);
    DescribeCountry<O>(input: DescribeCountryInput, opts?: O): Promise<DescribeCountryOutput>;
    ListCountries<O>(input: ListCountriesInput, opts?: O): Promise<ListCountriesOutput>;
}
export declare type Country = {
    id?: string;
    name?: string;
    flag?: string;
};
export declare type DescribeCountryInput = {
    countryId?: string;
};
export declare type DescribeCountryOutput = {
    country?: Country;
};
export declare type ListCountriesInput = Record<string, unknown>;
export declare type ListCountriesOutput = {
    items?: Country[];
    total?: number;
};
export {};
