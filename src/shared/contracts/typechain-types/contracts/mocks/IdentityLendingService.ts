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

export declare namespace LendingService {
  export type LendingServiceListingStruct = {
    id: PromiseOrValue<BigNumberish>;
    minDuration: PromiseOrValue<BigNumberish>;
    maxDuration: PromiseOrValue<BigNumberish>;
    currency: PromiseOrValue<string>;
    payBackOption: PromiseOrValue<BigNumberish>;
    rewardRate: PromiseOrValue<BigNumberish>;
  };

  export type LendingServiceListingStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    number,
    BigNumber
  ] & {
    id: BigNumber;
    minDuration: BigNumber;
    maxDuration: BigNumber;
    currency: string;
    payBackOption: number;
    rewardRate: BigNumber;
  };
}

export interface IdentityLendingServiceInterface extends utils.Interface {
  functions: {
    "addListing(uint256,uint256,address,uint8,uint256)": FunctionFragment;
    "getBalance()": FunctionFragment;
    "getListing(address,uint256)": FunctionFragment;
    "getListingsCount()": FunctionFragment;
    "lend()": FunctionFragment;
    "listings(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeListing(address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "serviceType()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "update(address,(uint256,uint256,uint256,address,uint8,uint256))": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addListing"
      | "getBalance"
      | "getListing"
      | "getListingsCount"
      | "lend"
      | "listings"
      | "owner"
      | "removeListing"
      | "renounceOwnership"
      | "serviceType"
      | "transferOwnership"
      | "update"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addListing",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getListing",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getListingsCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lend", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "listings",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeListing",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
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
    functionFragment: "update",
    values: [PromiseOrValue<string>, LendingService.LendingServiceListingStruct]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "addListing", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getListing", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getListingsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lend", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listings", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
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
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Lend(address,address,uint256)": EventFragment;
    "ListingCreated(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Withdraw(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Lend"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ListingCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface LendEventObject {
  lender: string;
  currency: string;
  amount: BigNumber;
}
export type LendEvent = TypedEvent<
  [string, string, BigNumber],
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

export interface WithdrawEventObject {
  withdrawer: string;
  currency: string;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, string, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface IdentityLendingService extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IdentityLendingServiceInterface;

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
    addListing(
      minDuration: PromiseOrValue<BigNumberish>,
      maxDuration: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      payBackOption: PromiseOrValue<BigNumberish>,
      rewardRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    getListing(
      currency: PromiseOrValue<string>,
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[LendingService.LendingServiceListingStructOutput]>;

    getListingsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    lend(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    listings(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, number, BigNumber] & {
        id: BigNumber;
        minDuration: BigNumber;
        maxDuration: BigNumber;
        currency: string;
        payBackOption: number;
        rewardRate: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeListing(
      currency: PromiseOrValue<string>,
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    serviceType(overrides?: CallOverrides): Promise<[number]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    update(
      currency: PromiseOrValue<string>,
      listing: LendingService.LendingServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addListing(
    minDuration: PromiseOrValue<BigNumberish>,
    maxDuration: PromiseOrValue<BigNumberish>,
    currency: PromiseOrValue<string>,
    payBackOption: PromiseOrValue<BigNumberish>,
    rewardRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getListing(
    currency: PromiseOrValue<string>,
    listingId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<LendingService.LendingServiceListingStructOutput>;

  getListingsCount(overrides?: CallOverrides): Promise<BigNumber>;

  lend(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  listings(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string, number, BigNumber] & {
      id: BigNumber;
      minDuration: BigNumber;
      maxDuration: BigNumber;
      currency: string;
      payBackOption: number;
      rewardRate: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  removeListing(
    currency: PromiseOrValue<string>,
    listingId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  serviceType(overrides?: CallOverrides): Promise<number>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  update(
    currency: PromiseOrValue<string>,
    listing: LendingService.LendingServiceListingStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addListing(
      minDuration: PromiseOrValue<BigNumberish>,
      maxDuration: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      payBackOption: PromiseOrValue<BigNumberish>,
      rewardRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getListing(
      currency: PromiseOrValue<string>,
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<LendingService.LendingServiceListingStructOutput>;

    getListingsCount(overrides?: CallOverrides): Promise<BigNumber>;

    lend(overrides?: CallOverrides): Promise<void>;

    listings(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, number, BigNumber] & {
        id: BigNumber;
        minDuration: BigNumber;
        maxDuration: BigNumber;
        currency: string;
        payBackOption: number;
        rewardRate: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    removeListing(
      currency: PromiseOrValue<string>,
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    serviceType(overrides?: CallOverrides): Promise<number>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    update(
      currency: PromiseOrValue<string>,
      listing: LendingService.LendingServiceListingStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Lend(address,address,uint256)"(
      lender?: PromiseOrValue<string> | null,
      currency?: null,
      amount?: null
    ): LendEventFilter;
    Lend(
      lender?: PromiseOrValue<string> | null,
      currency?: null,
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

    "Withdraw(address,address,uint256)"(
      withdrawer?: PromiseOrValue<string> | null,
      currency?: null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      withdrawer?: PromiseOrValue<string> | null,
      currency?: null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    addListing(
      minDuration: PromiseOrValue<BigNumberish>,
      maxDuration: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      payBackOption: PromiseOrValue<BigNumberish>,
      rewardRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getListing(
      currency: PromiseOrValue<string>,
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getListingsCount(overrides?: CallOverrides): Promise<BigNumber>;

    lend(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    listings(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeListing(
      currency: PromiseOrValue<string>,
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    serviceType(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    update(
      currency: PromiseOrValue<string>,
      listing: LendingService.LendingServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addListing(
      minDuration: PromiseOrValue<BigNumberish>,
      maxDuration: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      payBackOption: PromiseOrValue<BigNumberish>,
      rewardRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getListing(
      currency: PromiseOrValue<string>,
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getListingsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lend(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    listings(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeListing(
      currency: PromiseOrValue<string>,
      listingId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    serviceType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    update(
      currency: PromiseOrValue<string>,
      listing: LendingService.LendingServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
