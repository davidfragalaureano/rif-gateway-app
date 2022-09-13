/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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
} from "../../common";

export interface UserIdentityFactoryInterface extends utils.Interface {
  functions: {
    "authorize(address,bool)": FunctionFragment;
    "createIdentity(address)": FunctionFragment;
    "getIdentity(address)": FunctionFragment;
    "isAllowedToExecuteCallFor(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "authorize"
      | "createIdentity"
      | "getIdentity"
      | "isAllowedToExecuteCallFor"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "authorize",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "createIdentity",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getIdentity",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isAllowedToExecuteCallFor",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "authorize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAllowedToExecuteCallFor",
    data: BytesLike
  ): Result;

  events: {};
}

export interface UserIdentityFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UserIdentityFactoryInterface;

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
    authorize(
      serviceProvider: PromiseOrValue<string>,
      approval: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createIdentity(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getIdentity(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isAllowedToExecuteCallFor(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  authorize(
    serviceProvider: PromiseOrValue<string>,
    approval: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createIdentity(
    user: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getIdentity(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  isAllowedToExecuteCallFor(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    authorize(
      serviceProvider: PromiseOrValue<string>,
      approval: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    createIdentity(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getIdentity(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    isAllowedToExecuteCallFor(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    authorize(
      serviceProvider: PromiseOrValue<string>,
      approval: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createIdentity(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getIdentity(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAllowedToExecuteCallFor(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    authorize(
      serviceProvider: PromiseOrValue<string>,
      approval: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createIdentity(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getIdentity(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAllowedToExecuteCallFor(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
