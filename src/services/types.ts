import { BigNumber } from 'ethers'

export type RIFService = {
    serviceProviderName: string,
    listingName: string,
    listingAddress: string
    balance: number,
    apy: number,
    id: number,
    used: boolean
}

export type ServiceItemProps = {
    serviceProviderName: string,
    listingName: string,
    listingAddress: string,
    available: boolean,
    balance: number,
    apy: number,
    id: number,
    used: boolean,
    onClickHandler: Function
}

export enum ServiceTypes {
    Lending,
    Borrowing
}

export type BorrowServiceListing = {
    minAmount: BigNumber;
    maxAmount: BigNumber;
    maxDuration: BigNumber;
    interestRate: BigNumber;
    loanToValue: BigNumber;
    loanToValueTokenAddr: string;
    currency: string;
}
