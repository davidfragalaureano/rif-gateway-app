export type RIFService = {
    serviceProviderName: string,
    listingName: string,
    listingAddress: string
    balance: number,
    apy: number,
    id: number,
    used: boolean
}

export type ServiceItemProps = ServiceListing & {
    available: boolean;
    onClickHandler: Function;
}

export type ConsumeServiceProps = {
    id: number;
    serviceContractAddress: string;
    amount: number
}

export enum ServiceType {
    Lending,
    Borrowing
}

export type ServiceListing = {
    id: number;
    minAmount: number;
    maxAmount: number;
    minDuration: number;
    maxDuration: number;
    interestRate: number;
    loanToValue: number;
    loanToValueTokenAddr: string;
    currency: string;
    payBackOption: number;
    enabled: boolean;
    serviceProviderName: string;
    listingName: string;
    serviceType: ServiceType;
    serviceContractAddress: string;
    used: boolean;
    balance: number;
}
