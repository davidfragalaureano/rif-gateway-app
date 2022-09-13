export type RIFService = {
    serviceProviderName: string,
    listingName: string,
    listingAddress: string
    balance: number,
    apy: number
}

export type ServiceItemProps = {
    serviceProviderName: string,
    listingName: string,
    listingAddress: string,
    available: boolean,
    balance: number,
    apy: number
}