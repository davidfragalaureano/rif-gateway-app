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

export interface ACMEInterface extends utils.Interface {
  functions: {
    "deposit()": FunctionFragment;
    "deposit(address)": FunctionFragment;
    "getBalance()": FunctionFragment;
    "getBalance(address)": FunctionFragment;
    "getCetCollateralFactor(address)": FunctionFragment;
    "getDebtBalance(address)": FunctionFragment;
    "getDebtBalance(address,address)": FunctionFragment;
    "loan(address,uint256)": FunctionFragment;
    "loan(address,uint256,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "repay(address,uint256,address,address)": FunctionFragment;
    "repay(address,uint256,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateCollateralFactor(address,uint256)": FunctionFragment;
    "withdraw(uint256,address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deposit()"
      | "deposit(address)"
      | "getBalance()"
      | "getBalance(address)"
      | "getCetCollateralFactor"
      | "getDebtBalance(address)"
      | "getDebtBalance(address,address)"
      | "loan(address,uint256)"
      | "loan(address,uint256,address)"
      | "owner"
      | "renounceOwnership"
      | "repay(address,uint256,address,address)"
      | "repay(address,uint256,address)"
      | "transferOwnership"
      | "updateCollateralFactor"
      | "withdraw(uint256,address)"
      | "withdraw(uint256)"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "deposit()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCetCollateralFactor",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDebtBalance(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDebtBalance(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "loan(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "loan(address,uint256,address)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repay(address,uint256,address,address)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "repay(address,uint256,address)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCollateralFactor",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw(uint256,address)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "deposit()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deposit(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBalance()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBalance(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCetCollateralFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDebtBalance(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDebtBalance(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "loan(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "loan(address,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repay(address,uint256,address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repay(address,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCollateralFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdraw(uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdraw(uint256)",
    data: BytesLike
  ): Result;

  events: {
    "Deposit(address,uint256)": EventFragment;
    "Loan(address,uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ReceivedLiquidity(uint256)": EventFragment;
    "Repay(address,uint256,address)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Loan"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReceivedLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface DepositEventObject {
  from: string;
  amount: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface LoanEventObject {
  from: string;
  amount: BigNumber;
  currency: string;
}
export type LoanEvent = TypedEvent<
  [string, BigNumber, string],
  LoanEventObject
>;

export type LoanEventFilter = TypedEventFilter<LoanEvent>;

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

export interface ReceivedLiquidityEventObject {
  amount: BigNumber;
}
export type ReceivedLiquidityEvent = TypedEvent<
  [BigNumber],
  ReceivedLiquidityEventObject
>;

export type ReceivedLiquidityEventFilter =
  TypedEventFilter<ReceivedLiquidityEvent>;

export interface RepayEventObject {
  from: string;
  amount: BigNumber;
  currency: string;
}
export type RepayEvent = TypedEvent<
  [string, BigNumber, string],
  RepayEventObject
>;

export type RepayEventFilter = TypedEventFilter<RepayEvent>;

export interface WithdrawEventObject {
  from: string;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface ACME extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ACMEInterface;

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
    "deposit()"(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "deposit(address)"(
      depositor: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "getBalance()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { deposited: BigNumber; interest: BigNumber }
    >;

    "getBalance(address)"(
      depositor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { deposited: BigNumber; interest: BigNumber }
    >;

    getCetCollateralFactor(
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getDebtBalance(address)"(
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getDebtBalance(address,address)"(
      currency: PromiseOrValue<string>,
      loaner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "loan(address,uint256)"(
      currency: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "loan(address,uint256,address)"(
      currency: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      loaner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "repay(address,uint256,address,address)"(
      currency: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      payer: PromiseOrValue<string>,
      loaner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "repay(address,uint256,address)"(
      currency: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      loaner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateCollateralFactor(
      currency: PromiseOrValue<string>,
      factor: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "withdraw(uint256,address)"(
      amount: PromiseOrValue<BigNumberish>,
      withdrawer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "withdraw(uint256)"(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  "deposit()"(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "deposit(address)"(
    depositor: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "getBalance()"(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { deposited: BigNumber; interest: BigNumber }
  >;

  "getBalance(address)"(
    depositor: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { deposited: BigNumber; interest: BigNumber }
  >;

  getCetCollateralFactor(
    currency: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getDebtBalance(address)"(
    currency: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getDebtBalance(address,address)"(
    currency: PromiseOrValue<string>,
    loaner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "loan(address,uint256)"(
    currency: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "loan(address,uint256,address)"(
    currency: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    loaner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "repay(address,uint256,address,address)"(
    currency: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    payer: PromiseOrValue<string>,
    loaner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "repay(address,uint256,address)"(
    currency: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    loaner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateCollateralFactor(
    currency: PromiseOrValue<string>,
    factor: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "withdraw(uint256,address)"(
    amount: PromiseOrValue<BigNumberish>,
    withdrawer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "withdraw(uint256)"(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    "deposit()"(overrides?: CallOverrides): Promise<void>;

    "deposit(address)"(
      depositor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "getBalance()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { deposited: BigNumber; interest: BigNumber }
    >;

    "getBalance(address)"(
      depositor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { deposited: BigNumber; interest: BigNumber }
    >;

    getCetCollateralFactor(
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDebtBalance(address)"(
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDebtBalance(address,address)"(
      currency: PromiseOrValue<string>,
      loaner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "loan(address,uint256)"(
      currency: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "loan(address,uint256,address)"(
      currency: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      loaner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "repay(address,uint256,address,address)"(
      currency: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      payer: PromiseOrValue<string>,
      loaner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "repay(address,uint256,address)"(
      currency: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      loaner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateCollateralFactor(
      currency: PromiseOrValue<string>,
      factor: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(uint256,address)"(
      amount: PromiseOrValue<BigNumberish>,
      withdrawer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(uint256)"(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposit(address,uint256)"(
      from?: PromiseOrValue<string> | null,
      amount?: null
    ): DepositEventFilter;
    Deposit(
      from?: PromiseOrValue<string> | null,
      amount?: null
    ): DepositEventFilter;

    "Loan(address,uint256,address)"(
      from?: PromiseOrValue<string> | null,
      amount?: null,
      currency?: PromiseOrValue<string> | null
    ): LoanEventFilter;
    Loan(
      from?: PromiseOrValue<string> | null,
      amount?: null,
      currency?: PromiseOrValue<string> | null
    ): LoanEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "ReceivedLiquidity(uint256)"(amount?: null): ReceivedLiquidityEventFilter;
    ReceivedLiquidity(amount?: null): ReceivedLiquidityEventFilter;

    "Repay(address,uint256,address)"(
      from?: PromiseOrValue<string> | null,
      amount?: null,
      currency?: PromiseOrValue<string> | null
    ): RepayEventFilter;
    Repay(
      from?: PromiseOrValue<string> | null,
      amount?: null,
      currency?: PromiseOrValue<string> | null
    ): RepayEventFilter;

    "Withdraw(address,uint256)"(
      from?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      from?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    "deposit()"(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "deposit(address)"(
      depositor: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "getBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    "getBalance(address)"(
      depositor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCetCollateralFactor(
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDebtBalance(address)"(
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDebtBalance(address,address)"(
      currency: PromiseOrValue<string>,
      loaner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "loan(address,uint256)"(
      currency: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "loan(address,uint256,address)"(
      currency: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      loaner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "repay(address,uint256,address,address)"(
      currency: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      payer: PromiseOrValue<string>,
      loaner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "repay(address,uint256,address)"(
      currency: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      loaner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateCollateralFactor(
      currency: PromiseOrValue<string>,
      factor: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "withdraw(uint256,address)"(
      amount: PromiseOrValue<BigNumberish>,
      withdrawer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "withdraw(uint256)"(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "deposit()"(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "deposit(address)"(
      depositor: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "getBalance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getBalance(address)"(
      depositor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCetCollateralFactor(
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDebtBalance(address)"(
      currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDebtBalance(address,address)"(
      currency: PromiseOrValue<string>,
      loaner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "loan(address,uint256)"(
      currency: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "loan(address,uint256,address)"(
      currency: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      loaner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "repay(address,uint256,address,address)"(
      currency: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      payer: PromiseOrValue<string>,
      loaner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "repay(address,uint256,address)"(
      currency: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      loaner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateCollateralFactor(
      currency: PromiseOrValue<string>,
      factor: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256,address)"(
      amount: PromiseOrValue<BigNumberish>,
      withdrawer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256)"(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
