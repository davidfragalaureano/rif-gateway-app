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

export interface $IBorrowServiceInterface extends utils.Interface {
  functions: {
    "borrow(uint256,address,uint256,uint256)": FunctionFragment;
    "calculateRequiredCollateral(uint256,address)": FunctionFragment;
    "getCollateralBalance()": FunctionFragment;
    "pay(uint256,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "borrow"
      | "calculateRequiredCollateral"
      | "getCollateralBalance"
      | "pay"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "borrow",
    values: [
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
    functionFragment: "getCollateralBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pay",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateRequiredCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateralBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;

  events: {};
}

export interface $IBorrowService extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: $IBorrowServiceInterface;

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
    borrow(
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

    getCollateralBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    pay(
      amount: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  borrow(
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

  getCollateralBalance(overrides?: CallOverrides): Promise<BigNumber>;

  pay(
    amount: PromiseOrValue<BigNumberish>,
    currency: PromiseOrValue<string>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    borrow(
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

    getCollateralBalance(overrides?: CallOverrides): Promise<BigNumber>;

    pay(
      amount: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    borrow(
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

    getCollateralBalance(overrides?: CallOverrides): Promise<BigNumber>;

    pay(
      amount: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    borrow(
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

    getCollateralBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pay(
      amount: PromiseOrValue<BigNumberish>,
      currency: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
