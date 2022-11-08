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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

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

export interface $SmartWalletInterface extends utils.Interface {
  functions: {
    "$_buildDomainSeparator()": FunctionFragment;
    "DATA_VERSION_HASH()": FunctionFragment;
    "__hh_exposed_bytecode_marker()": FunctionFragment;
    "domainSeparator()": FunctionFragment;
    "execute(bytes32,(address,uint256,address),bytes,bytes,address,address)": FunctionFragment;
    "getDomainSeparator()": FunctionFragment;
    "nonce()": FunctionFragment;
    "read(address,bytes)": FunctionFragment;
    "verify(bytes32,(address,uint256,address),bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "$_buildDomainSeparator"
      | "DATA_VERSION_HASH"
      | "__hh_exposed_bytecode_marker"
      | "domainSeparator"
      | "execute"
      | "getDomainSeparator"
      | "nonce"
      | "read"
      | "verify"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "$_buildDomainSeparator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DATA_VERSION_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "__hh_exposed_bytecode_marker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "domainSeparator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [
      PromiseOrValue<BytesLike>,
      IForwarder.ForwardRequestStruct,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDomainSeparator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "read",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [
      PromiseOrValue<BytesLike>,
      IForwarder.ForwardRequestStruct,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "$_buildDomainSeparator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DATA_VERSION_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "__hh_exposed_bytecode_marker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "domainSeparator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDomainSeparator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

  events: {};
}

export interface $SmartWallet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: $SmartWalletInterface;

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
    $_buildDomainSeparator(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    DATA_VERSION_HASH(overrides?: CallOverrides): Promise<[string]>;

    __hh_exposed_bytecode_marker(overrides?: CallOverrides): Promise<[string]>;

    domainSeparator(overrides?: CallOverrides): Promise<[string]>;

    execute(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      to: PromiseOrValue<string>,
      currency: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDomainSeparator(overrides?: CallOverrides): Promise<[string]>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    read(
      targetContract: PromiseOrValue<string>,
      functionToCall: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    verify(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  $_buildDomainSeparator(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  DATA_VERSION_HASH(overrides?: CallOverrides): Promise<string>;

  __hh_exposed_bytecode_marker(overrides?: CallOverrides): Promise<string>;

  domainSeparator(overrides?: CallOverrides): Promise<string>;

  execute(
    suffixData: PromiseOrValue<BytesLike>,
    req: IForwarder.ForwardRequestStruct,
    sig: PromiseOrValue<BytesLike>,
    data: PromiseOrValue<BytesLike>,
    to: PromiseOrValue<string>,
    currency: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDomainSeparator(overrides?: CallOverrides): Promise<string>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  read(
    targetContract: PromiseOrValue<string>,
    functionToCall: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  verify(
    suffixData: PromiseOrValue<BytesLike>,
    req: IForwarder.ForwardRequestStruct,
    sig: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    $_buildDomainSeparator(overrides?: CallOverrides): Promise<void>;

    DATA_VERSION_HASH(overrides?: CallOverrides): Promise<string>;

    __hh_exposed_bytecode_marker(overrides?: CallOverrides): Promise<string>;

    domainSeparator(overrides?: CallOverrides): Promise<string>;

    execute(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      to: PromiseOrValue<string>,
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { success: boolean; ret: string }>;

    getDomainSeparator(overrides?: CallOverrides): Promise<string>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    read(
      targetContract: PromiseOrValue<string>,
      functionToCall: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    verify(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    $_buildDomainSeparator(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    DATA_VERSION_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    __hh_exposed_bytecode_marker(overrides?: CallOverrides): Promise<BigNumber>;

    domainSeparator(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      to: PromiseOrValue<string>,
      currency: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDomainSeparator(overrides?: CallOverrides): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    read(
      targetContract: PromiseOrValue<string>,
      functionToCall: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verify(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    $_buildDomainSeparator(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    DATA_VERSION_HASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    __hh_exposed_bytecode_marker(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    domainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      to: PromiseOrValue<string>,
      currency: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDomainSeparator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    read(
      targetContract: PromiseOrValue<string>,
      functionToCall: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verify(
      suffixData: PromiseOrValue<BytesLike>,
      req: IForwarder.ForwardRequestStruct,
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}