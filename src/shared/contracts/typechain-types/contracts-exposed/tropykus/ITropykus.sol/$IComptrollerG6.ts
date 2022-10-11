/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface $IComptrollerG6Interface extends utils.Interface {
  functions: {
    "markets(address)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "markets"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "markets",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;

  events: {};
}

export interface $IComptrollerG6 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: $IComptrollerG6Interface;

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
    markets(
      cToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;
  };

  markets(
    cToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  callStatic: {
    markets(
      cToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    markets(
      cToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    markets(
      cToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
