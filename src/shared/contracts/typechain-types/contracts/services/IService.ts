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

export interface IServiceInterface extends utils.Interface {
  functions: {
    "addListing((uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint8,bool,string))": FunctionFragment;
    "disableListing(uint256)": FunctionFragment;
    "getBalance(address)": FunctionFragment;
    "getListing(uint256)": FunctionFragment;
    "getListingsCount()": FunctionFragment;
    "getServiceProviderName()": FunctionFragment;
    "getServiceType()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "updateListing((uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint8,bool,string))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addListing"
      | "disableListing"
      | "getBalance"
      | "getListing"
      | "getListingsCount"
      | "getServiceProviderName"
      | "getServiceType"
      | "supportsInterface"
      | "updateListing"
  ): FunctionFragment;

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
    functionFragment: "getServiceProviderName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getServiceType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateListing",
    values: [ServiceListingStruct]
  ): string;

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
  decodeFunctionResult(
    functionFragment: "getServiceProviderName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getServiceType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateListing",
    data: BytesLike
  ): Result;

  events: {
    "ListingCreated(address,uint256)": EventFragment;
    "Withdraw(uint256,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ListingCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface ListingCreatedEventObject {
  currency: string;
  listingId: BigNumber;
}
export type ListingCreatedEvent = TypedEvent<
  [string, BigNumber],
  ListingCreatedEventObject
>;

export type ListingCreatedEventFilter = TypedEventFilter<ListingCreatedEvent>;

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

export interface IService extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IServiceInterface;

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

    getServiceProviderName(overrides?: CallOverrides): Promise<[string]>;

    getServiceType(overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    updateListing(
      listing: ServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

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

  getServiceProviderName(overrides?: CallOverrides): Promise<string>;

  getServiceType(overrides?: CallOverrides): Promise<string>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  updateListing(
    listing: ServiceListingStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
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

    getServiceProviderName(overrides?: CallOverrides): Promise<string>;

    getServiceType(overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateListing(
      listing: ServiceListingStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ListingCreated(address,uint256)"(
      currency?: PromiseOrValue<string> | null,
      listingId?: PromiseOrValue<BigNumberish> | null
    ): ListingCreatedEventFilter;
    ListingCreated(
      currency?: PromiseOrValue<string> | null,
      listingId?: PromiseOrValue<BigNumberish> | null
    ): ListingCreatedEventFilter;

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

    getServiceProviderName(overrides?: CallOverrides): Promise<BigNumber>;

    getServiceType(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateListing(
      listing: ServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
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

    getServiceProviderName(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getServiceType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateListing(
      listing: ServiceListingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
