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
} from "../../../common";

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

export interface $ServiceInterface extends utils.Interface {
  functions: {
    "$_checkOwner()": FunctionFragment;
    "$_msgData()": FunctionFragment;
    "$_msgSender()": FunctionFragment;
    "$_transferOwnership(address)": FunctionFragment;
    "addListing((uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint8,bool,string))": FunctionFragment;
    "disableListing(uint256)": FunctionFragment;
    "getBalance(address)": FunctionFragment;
    "getListing(uint256)": FunctionFragment;
    "getListingsCount()": FunctionFragment;
    "listings(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "serviceProviderName()": FunctionFragment;
    "serviceType()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateListing((uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint8,bool,string))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "$_checkOwner"
      | "$_msgData"
      | "$_msgSender"
      | "$_transferOwnership"
      | "addListing"
      | "disableListing"
      | "getBalance"
      | "getListing"
      | "getListingsCount"
      | "listings"
      | "owner"
      | "renounceOwnership"
      | "serviceProviderName"
      | "serviceType"
      | "transferOwnership"
      | "updateListing"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "$_checkOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "$_msgData", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "$_msgSender",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "$_transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addListing",
    values: [ServiceListingStruct]
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
    functionFragment: "getListing",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getListingsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listings",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
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
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateListing",
    values: [ServiceListingStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "$_checkOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "$_msgData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "$_msgSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "$_transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addListing", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "disableListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getListing", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getListingsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listings", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
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
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateListing",
    data: BytesLike
  ): Result;

  events: {
    "Borrow(uint256,address,address,uint256,uint256)": EventFragment;
    "Lend(uint256,address,address,uint256)": EventFragment;
    "ListingCreated(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Pay(uint256,address,address,uint256)": EventFragment;
    "Withdraw(uint256,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Lend"): EventFragment;
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

export interface LendEventObject {
  listingId: BigNumber;
  lender: string;
  currency: string;
  amount: BigNumber;
}
export type LendEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  LendEventObject
>;

export type LendEventFilter = TypedEventFilter<LendEvent>;

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

export interface $Service extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: $ServiceInterface;

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
    $_checkOwner(overrides?: CallOverrides): Promise<[void]>;

    $_msgData(overrides?: CallOverrides): Promise<[string]>;

    $_msgSender(overrides?: CallOverrides): Promise<[string]>;

    $_transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addListing(
      listing: ServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    disableListing(
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getBalance(
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getListing(
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ServiceListingStructOutput]>;

    getListingsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

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

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    serviceProviderName(overrides?: CallOverrides): Promise<[string]>;

    serviceType(overrides?: CallOverrides): Promise<[number]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateListing(
      listing: ServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  $_checkOwner(overrides?: CallOverrides): Promise<void>;

  $_msgData(overrides?: CallOverrides): Promise<string>;

  $_msgSender(overrides?: CallOverrides): Promise<string>;

  $_transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addListing(
    listing: ServiceListingStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  disableListing(
    listingId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getBalance(
    currency: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getListing(
    listingId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ServiceListingStructOutput>;

  getListingsCount(overrides?: CallOverrides): Promise<BigNumber>;

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

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  serviceProviderName(overrides?: CallOverrides): Promise<string>;

  serviceType(overrides?: CallOverrides): Promise<number>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateListing(
    listing: ServiceListingStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    $_checkOwner(overrides?: CallOverrides): Promise<void>;

    $_msgData(overrides?: CallOverrides): Promise<string>;

    $_msgSender(overrides?: CallOverrides): Promise<string>;

    $_transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addListing(
      listing: ServiceListingStruct,
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

    getListing(
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ServiceListingStructOutput>;

    getListingsCount(overrides?: CallOverrides): Promise<BigNumber>;

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

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    serviceProviderName(overrides?: CallOverrides): Promise<string>;

    serviceType(overrides?: CallOverrides): Promise<number>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateListing(
      listing: ServiceListingStruct,
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

    "Lend(uint256,address,address,uint256)"(
      listingId?: PromiseOrValue<BigNumberish> | null,
      lender?: PromiseOrValue<string> | null,
      currency?: PromiseOrValue<string> | null,
      amount?: null
    ): LendEventFilter;
    Lend(
      listingId?: PromiseOrValue<BigNumberish> | null,
      lender?: PromiseOrValue<string> | null,
      currency?: PromiseOrValue<string> | null,
      amount?: null
    ): LendEventFilter;

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
    $_checkOwner(overrides?: CallOverrides): Promise<BigNumber>;

    $_msgData(overrides?: CallOverrides): Promise<BigNumber>;

    $_msgSender(overrides?: CallOverrides): Promise<BigNumber>;

    $_transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addListing(
      listing: ServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    disableListing(
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getBalance(
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getListing(
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getListingsCount(overrides?: CallOverrides): Promise<BigNumber>;

    listings(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    serviceProviderName(overrides?: CallOverrides): Promise<BigNumber>;

    serviceType(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateListing(
      listing: ServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    $_checkOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    $_msgData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    $_msgSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    $_transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addListing(
      listing: ServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    disableListing(
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getBalance(
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getListing(
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getListingsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    listings(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    serviceProviderName(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    serviceType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateListing(
      listing: ServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
