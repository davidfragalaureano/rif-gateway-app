/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type ServiceListingStruct = {
  id: PromiseOrValue<BigNumberish>;
  minAmount: PromiseOrValue<BigNumberish>;
  maxAmount: PromiseOrValue<BigNumberish>;
  minDuration: PromiseOrValue<BigNumberish>;
  maxDuration: PromiseOrValue<BigNumberish>;
  interestRate: PromiseOrValue<BigNumberish>;
  loanToValue: PromiseOrValue<BigNumberish>;
  loanToValueTokenAddr: PromiseOrValue<string>;
  currency: PromiseOrValue<string>;
  payBackOption: PromiseOrValue<BigNumberish>;
  enabled: PromiseOrValue<boolean>;
  name: PromiseOrValue<string>;
};

export type ServiceListingStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string,
  number,
  boolean,
  string
] & {
  id: BigNumber;
  minAmount: BigNumber;
  maxAmount: BigNumber;
  minDuration: BigNumber;
  maxDuration: BigNumber;
  interestRate: BigNumber;
  loanToValue: BigNumber;
  loanToValueTokenAddr: string;
  currency: string;
  payBackOption: number;
  enabled: boolean;
  name: string;
};

export declare namespace IForwarder {
  export type ForwardRequestStruct = {
    from: PromiseOrValue<string>;
    nonce: PromiseOrValue<BigNumberish>;
    executor: PromiseOrValue<string>;
  };

  export type ForwardRequestStructOutput = [string, BigNumber, string] & {
    from: string;
    nonce: BigNumber;
    executor: string;
  };
}

export interface BorrowServiceInterface extends utils.Interface {
  functions: {
    "addLiquidity(uint256,uint256)": FunctionFragment;
    "addListing((uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint8,bool,string))": FunctionFragment;
    "borrow(bytes32,(address,uint256,address),bytes,uint256,address,uint256,uint256)": FunctionFragment;
    "calculateRequiredCollateral(uint256,address)": FunctionFragment;
    "currentLiquidity(uint256)": FunctionFragment;
    "disableListing(uint256)": FunctionFragment;
    "getBalance(address)": FunctionFragment;
    "getCollateralBalance()": FunctionFragment;
    "getListing(uint256)": FunctionFragment;
    "getListingsCount()": FunctionFragment;
    "getServiceProviderName()": FunctionFragment;
    "getServiceType()": FunctionFragment;
    "getThisAddress()": FunctionFragment;
    "listings(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "pay(bytes32,(address,uint256,address),bytes,uint256,address,uint256)": FunctionFragment;
    "removeLiquidity(uint256,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "serviceProviderName()": FunctionFragment;
    "serviceType()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateListing((uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint8,bool,string))": FunctionFragment;
    "withdraw(bytes32,(address,uint256,address),bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addLiquidity"
      | "addListing"
      | "borrow"
      | "calculateRequiredCollateral"
      | "currentLiquidity"
      | "disableListing"
      | "getBalance"
      | "getCollateralBalance"
      | "getListing"
      | "getListingsCount"
      | "getServiceProviderName"
      | "getServiceType"
      | "getThisAddress"
      | "listings"
      | "owner"
      | "pay"
      | "removeLiquidity"
      | "renounceOwnership"
      | "serviceProviderName"
      | "serviceType"
      | "supportsInterface"
      | "transferOwnership"
      | "updateListing"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addListing",
    values: [ServiceListingStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "borrow",
    values: [
      PromiseOrValue<BytesLike>,
      IForwarder.ForwardRequestStruct,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateRequiredCollateral",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "currentLiquidity",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "disableListing",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateralBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getListing",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getListingsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getServiceProviderName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getServiceType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getThisAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listings",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pay",
    values: [
      PromiseOrValue<BytesLike>,
      IForwarder.ForwardRequestStruct,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "serviceProviderName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "serviceType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateListing",
    values: [ServiceListingStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [
      PromiseOrValue<BytesLike>,
      IForwarder.ForwardRequestStruct,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addListing", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateRequiredCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCollateralBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getListing", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getListingsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getServiceProviderName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getServiceType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getThisAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listings", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "serviceProviderName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "serviceType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Borrow(uint256,address,address,uint256,uint256)": EventFragment;
    "ListingCreated(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Pay(uint256,address,address,uint256)": EventFragment;
    "Withdraw(uint256,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ListingCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Pay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface BorrowEventObject {
  listingId: BigNumber;
  borrower: string;
  currency: string;
  amount: BigNumber;
  duration: BigNumber;
}
export type BorrowEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, BigNumber],
  BorrowEventObject
>;

export type BorrowEventFilter = TypedEventFilter<BorrowEvent>;

export interface ListingCreatedEventObject {
  currency: string;
  listingId: BigNumber;
}
export type ListingCreatedEvent = TypedEvent<
  [string, BigNumber],
  ListingCreatedEventObject
>;

export type ListingCreatedEventFilter = TypedEventFilter<ListingCreatedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PayEventObject {
  listingId: BigNumber;
  borrower: string;
  currency: string;
  amount: BigNumber;
}
export type PayEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  PayEventObject
>;

export type PayEventFilter = TypedEventFilter<PayEvent>;

export interface WithdrawEventObject {
  listingId: BigNumber;
  withdrawer: string;
  currency: string;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface BorrowService extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BorrowServiceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addLiquidity(
      amount: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addListing(
      listing: ServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    borrow(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    calculateRequiredCollateral(
      amount: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    currentLiquidity(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { liquidity: BigNumber }>;

    disableListing(
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getBalance(
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCollateralBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    getListing(
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ServiceListingStructOutput]>;

    getListingsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getServiceProviderName(overrides?: CallOverrides): Promise<[string]>;

    getServiceType(overrides?: CallOverrides): Promise<[string]>;

    getThisAddress(overrides?: CallOverrides): Promise<[string]>;

    listings(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        number,
        boolean,
        string
      ] & {
        id: BigNumber;
        minAmount: BigNumber;
        maxAmount: BigNumber;
        minDuration: BigNumber;
        maxDuration: BigNumber;
        interestRate: BigNumber;
        loanToValue: BigNumber;
        loanToValueTokenAddr: string;
        currency: string;
        payBackOption: number;
        enabled: boolean;
        name: string;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pay(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeLiquidity(
      amount: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    serviceProviderName(overrides?: CallOverrides): Promise<[string]>;

    serviceType(overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateListing(
      listing: ServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    amount: PromiseOrValue<BigNumberish>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addListing(
    listing: ServiceListingStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  borrow(
    suffixData: PromiseOrValue<BytesLike>,
    req: IForwarder.ForwardRequestStruct,
    sig: PromiseOrValue<BytesLike>,
    amount: PromiseOrValue<BigNumberish>,
    currency: PromiseOrValue<string>,
    duration: PromiseOrValue<BigNumberish>,
    listingId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  calculateRequiredCollateral(
    amount: PromiseOrValue<BigNumberish>,
    currency: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  currentLiquidity(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  disableListing(
    listingId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getBalance(
    currency: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCollateralBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getListing(
    listingId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ServiceListingStructOutput>;

  getListingsCount(overrides?: CallOverrides): Promise<BigNumber>;

  getServiceProviderName(overrides?: CallOverrides): Promise<string>;

  getServiceType(overrides?: CallOverrides): Promise<string>;

  getThisAddress(overrides?: CallOverrides): Promise<string>;

  listings(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      string,
      number,
      boolean,
      string
    ] & {
      id: BigNumber;
      minAmount: BigNumber;
      maxAmount: BigNumber;
      minDuration: BigNumber;
      maxDuration: BigNumber;
      interestRate: BigNumber;
      loanToValue: BigNumber;
      loanToValueTokenAddr: string;
      currency: string;
      payBackOption: number;
      enabled: boolean;
      name: string;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  pay(
    suffixData: PromiseOrValue<BytesLike>,
    req: IForwarder.ForwardRequestStruct,
    sig: PromiseOrValue<BytesLike>,
    amount: PromiseOrValue<BigNumberish>,
    currency: PromiseOrValue<string>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeLiquidity(
    amount: PromiseOrValue<BigNumberish>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  serviceProviderName(overrides?: CallOverrides): Promise<string>;

  serviceType(overrides?: CallOverrides): Promise<string>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateListing(
    listing: ServiceListingStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    suffixData: PromiseOrValue<BytesLike>,
    req: IForwarder.ForwardRequestStruct,
    sig: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      amount: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addListing(
      listing: ServiceListingStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrow(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    calculateRequiredCollateral(
      amount: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentLiquidity(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    disableListing(
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getBalance(
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCollateralBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getListing(
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ServiceListingStructOutput>;

    getListingsCount(overrides?: CallOverrides): Promise<BigNumber>;

    getServiceProviderName(overrides?: CallOverrides): Promise<string>;

    getServiceType(overrides?: CallOverrides): Promise<string>;

    getThisAddress(overrides?: CallOverrides): Promise<string>;

    listings(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        number,
        boolean,
        string
      ] & {
        id: BigNumber;
        minAmount: BigNumber;
        maxAmount: BigNumber;
        minDuration: BigNumber;
        maxDuration: BigNumber;
        interestRate: BigNumber;
        loanToValue: BigNumber;
        loanToValueTokenAddr: string;
        currency: string;
        payBackOption: number;
        enabled: boolean;
        name: string;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    pay(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeLiquidity(
      amount: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    serviceProviderName(overrides?: CallOverrides): Promise<string>;

    serviceType(overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateListing(
      listing: ServiceListingStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Borrow(uint256,address,address,uint256,uint256)"(
      listingId?: PromiseOrValue<BigNumberish> | null,
      borrower?: PromiseOrValue<string> | null,
      currency?: PromiseOrValue<string> | null,
      amount?: null,
      duration?: null
    ): BorrowEventFilter;
    Borrow(
      listingId?: PromiseOrValue<BigNumberish> | null,
      borrower?: PromiseOrValue<string> | null,
      currency?: PromiseOrValue<string> | null,
      amount?: null,
      duration?: null
    ): BorrowEventFilter;

    "ListingCreated(address,uint256)"(
      currency?: PromiseOrValue<string> | null,
      listingId?: PromiseOrValue<BigNumberish> | null
    ): ListingCreatedEventFilter;
    ListingCreated(
      currency?: PromiseOrValue<string> | null,
      listingId?: PromiseOrValue<BigNumberish> | null
    ): ListingCreatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Pay(uint256,address,address,uint256)"(
      listingId?: PromiseOrValue<BigNumberish> | null,
      borrower?: PromiseOrValue<string> | null,
      currency?: PromiseOrValue<string> | null,
      amount?: null
    ): PayEventFilter;
    Pay(
      listingId?: PromiseOrValue<BigNumberish> | null,
      borrower?: PromiseOrValue<string> | null,
      currency?: PromiseOrValue<string> | null,
      amount?: null
    ): PayEventFilter;

    "Withdraw(uint256,address,address,uint256)"(
      listingId?: PromiseOrValue<BigNumberish> | null,
      withdrawer?: PromiseOrValue<string> | null,
      currency?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      listingId?: PromiseOrValue<BigNumberish> | null,
      withdrawer?: PromiseOrValue<string> | null,
      currency?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    addLiquidity(
      amount: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addListing(
      listing: ServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    borrow(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    calculateRequiredCollateral(
      amount: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentLiquidity(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    disableListing(
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getBalance(
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCollateralBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getListing(
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getListingsCount(overrides?: CallOverrides): Promise<BigNumber>;

    getServiceProviderName(overrides?: CallOverrides): Promise<BigNumber>;

    getServiceType(overrides?: CallOverrides): Promise<BigNumber>;

    getThisAddress(overrides?: CallOverrides): Promise<BigNumber>;

    listings(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pay(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeLiquidity(
      amount: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    serviceProviderName(overrides?: CallOverrides): Promise<BigNumber>;

    serviceType(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateListing(
      listing: ServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      amount: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addListing(
      listing: ServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    borrow(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    calculateRequiredCollateral(
      amount: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentLiquidity(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    disableListing(
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getBalance(
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCollateralBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getListing(
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getListingsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getServiceProviderName(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getServiceType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getThisAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    listings(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pay(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      amount: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    serviceProviderName(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    serviceType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateListing(
      listing: ServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
