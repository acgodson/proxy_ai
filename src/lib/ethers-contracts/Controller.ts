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
} from "./common";

export interface ControllerInterface extends utils.Interface {
  functions: {
    "authorizedRouters(address)": FunctionFragment;
    "cleanUpExpiredKeys(bytes32[])": FunctionFragment;
    "expirationPeriod()": FunctionFragment;
    "getIdempotencyData(bytes32)": FunctionFragment;
    "idempotencyKeys(bytes32)": FunctionFragment;
    "receiveWormholeMessages(bytes,bytes[],bytes32,uint16,bytes32)": FunctionFragment;
    "registerRouter(address)": FunctionFragment;
    "requestHashToKey(bytes32)": FunctionFragment;
    "setVault(address)": FunctionFragment;
    "submitReceipt(bytes32,address,uint256)": FunctionFragment;
    "vault()": FunctionFragment;
    "wormholeRelayer()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "authorizedRouters"
      | "cleanUpExpiredKeys"
      | "expirationPeriod"
      | "getIdempotencyData"
      | "idempotencyKeys"
      | "receiveWormholeMessages"
      | "registerRouter"
      | "requestHashToKey"
      | "setVault"
      | "submitReceipt"
      | "vault"
      | "wormholeRelayer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "authorizedRouters",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "cleanUpExpiredKeys",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "expirationPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIdempotencyData",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "idempotencyKeys",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveWormholeMessages",
    values: [BytesLike, BytesLike[], BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerRouter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "requestHashToKey",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "setVault", values: [string]): string;
  encodeFunctionData(
    functionFragment: "submitReceipt",
    values: [BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wormholeRelayer",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "authorizedRouters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cleanUpExpiredKeys",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "expirationPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIdempotencyData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "idempotencyKeys",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveWormholeMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestHashToKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "submitReceipt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wormholeRelayer",
    data: BytesLike
  ): Result;

  events: {
    "KeyGenerated(bytes32,address,uint16,bytes32)": EventFragment;
    "ReceiptSubmitted(bytes32,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "KeyGenerated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReceiptSubmitted"): EventFragment;
}

export interface KeyGeneratedEventObject {
  idempotencyKey: string;
  proxy: string;
  sourceChain: number;
  sourceAddress: string;
}
export type KeyGeneratedEvent = TypedEvent<
  [string, string, number, string],
  KeyGeneratedEventObject
>;

export type KeyGeneratedEventFilter = TypedEventFilter<KeyGeneratedEvent>;

export interface ReceiptSubmittedEventObject {
  idempotencyKey: string;
  token: string;
  usedTokens: BigNumber;
}
export type ReceiptSubmittedEvent = TypedEvent<
  [string, string, BigNumber],
  ReceiptSubmittedEventObject
>;

export type ReceiptSubmittedEventFilter =
  TypedEventFilter<ReceiptSubmittedEvent>;

export interface Controller extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ControllerInterface;

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
    authorizedRouters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    cleanUpExpiredKeys(
      keys: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    expirationPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    getIdempotencyData(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, number, boolean, BigNumber] & {
        proxy: string;
        predictedTokenUsage: number;
        processed: boolean;
        expirationTime: BigNumber;
      }
    >;

    idempotencyKeys(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, number, boolean, BigNumber] & {
        proxy: string;
        predictedTokenUsage: number;
        processed: boolean;
        expirationTime: BigNumber;
      }
    >;

    receiveWormholeMessages(
      payload: BytesLike,
      arg1: BytesLike[],
      arg2: BytesLike,
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    registerRouter(
      router: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    requestHashToKey(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setVault(
      _vault: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    submitReceipt(
      idempotencyKey: BytesLike,
      token: string,
      usedTokens: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    wormholeRelayer(overrides?: CallOverrides): Promise<[string]>;
  };

  authorizedRouters(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  cleanUpExpiredKeys(
    keys: BytesLike[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  expirationPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  getIdempotencyData(
    key: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, number, boolean, BigNumber] & {
      proxy: string;
      predictedTokenUsage: number;
      processed: boolean;
      expirationTime: BigNumber;
    }
  >;

  idempotencyKeys(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, number, boolean, BigNumber] & {
      proxy: string;
      predictedTokenUsage: number;
      processed: boolean;
      expirationTime: BigNumber;
    }
  >;

  receiveWormholeMessages(
    payload: BytesLike,
    arg1: BytesLike[],
    arg2: BytesLike,
    sourceChain: BigNumberish,
    sourceAddress: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  registerRouter(
    router: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  requestHashToKey(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  setVault(
    _vault: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  submitReceipt(
    idempotencyKey: BytesLike,
    token: string,
    usedTokens: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  wormholeRelayer(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    authorizedRouters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    cleanUpExpiredKeys(
      keys: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    expirationPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getIdempotencyData(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, number, boolean, BigNumber] & {
        proxy: string;
        predictedTokenUsage: number;
        processed: boolean;
        expirationTime: BigNumber;
      }
    >;

    idempotencyKeys(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, number, boolean, BigNumber] & {
        proxy: string;
        predictedTokenUsage: number;
        processed: boolean;
        expirationTime: BigNumber;
      }
    >;

    receiveWormholeMessages(
      payload: BytesLike,
      arg1: BytesLike[],
      arg2: BytesLike,
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    registerRouter(router: string, overrides?: CallOverrides): Promise<void>;

    requestHashToKey(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    setVault(_vault: string, overrides?: CallOverrides): Promise<void>;

    submitReceipt(
      idempotencyKey: BytesLike,
      token: string,
      usedTokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    vault(overrides?: CallOverrides): Promise<string>;

    wormholeRelayer(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "KeyGenerated(bytes32,address,uint16,bytes32)"(
      idempotencyKey?: BytesLike | null,
      proxy?: null,
      sourceChain?: null,
      sourceAddress?: null
    ): KeyGeneratedEventFilter;
    KeyGenerated(
      idempotencyKey?: BytesLike | null,
      proxy?: null,
      sourceChain?: null,
      sourceAddress?: null
    ): KeyGeneratedEventFilter;

    "ReceiptSubmitted(bytes32,address,uint256)"(
      idempotencyKey?: BytesLike | null,
      token?: null,
      usedTokens?: null
    ): ReceiptSubmittedEventFilter;
    ReceiptSubmitted(
      idempotencyKey?: BytesLike | null,
      token?: null,
      usedTokens?: null
    ): ReceiptSubmittedEventFilter;
  };

  estimateGas: {
    authorizedRouters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cleanUpExpiredKeys(
      keys: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    expirationPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getIdempotencyData(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    idempotencyKeys(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveWormholeMessages(
      payload: BytesLike,
      arg1: BytesLike[],
      arg2: BytesLike,
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    registerRouter(
      router: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    requestHashToKey(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setVault(
      _vault: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    submitReceipt(
      idempotencyKey: BytesLike,
      token: string,
      usedTokens: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    wormholeRelayer(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    authorizedRouters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cleanUpExpiredKeys(
      keys: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    expirationPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getIdempotencyData(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    idempotencyKeys(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveWormholeMessages(
      payload: BytesLike,
      arg1: BytesLike[],
      arg2: BytesLike,
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    registerRouter(
      router: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    requestHashToKey(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setVault(
      _vault: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    submitReceipt(
      idempotencyKey: BytesLike,
      token: string,
      usedTokens: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wormholeRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
