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

export interface CustomRouterInterface extends utils.Interface {
  functions: {
    "controller()": FunctionFragment;
    "controllerChainId()": FunctionFragment;
    "controllerVault()": FunctionFragment;
    "depositToFeeTank(uint256)": FunctionFragment;
    "feeTank(address)": FunctionFragment;
    "generateKey(bytes32,uint256,uint256)": FunctionFragment;
    "idempotencyKeyToTokenAmount(bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "quoteCrossChainMessage(uint16)": FunctionFragment;
    "registerAdmin(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "routerAdmins(address)": FunctionFragment;
    "setController(address)": FunctionFragment;
    "setControllerChainId(uint16)": FunctionFragment;
    "setControllerVault(address)": FunctionFragment;
    "setRegisteredSender(uint16,bytes32)": FunctionFragment;
    "submitReceipt(bytes32,uint256)": FunctionFragment;
    "token()": FunctionFragment;
    "tokenBridge()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawFromFeeTank(uint256)": FunctionFragment;
    "wormhole()": FunctionFragment;
    "wormholeRelayer()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "controller"
      | "controllerChainId"
      | "controllerVault"
      | "depositToFeeTank"
      | "feeTank"
      | "generateKey"
      | "idempotencyKeyToTokenAmount"
      | "owner"
      | "quoteCrossChainMessage"
      | "registerAdmin"
      | "renounceOwnership"
      | "routerAdmins"
      | "setController"
      | "setControllerChainId"
      | "setControllerVault"
      | "setRegisteredSender"
      | "submitReceipt"
      | "token"
      | "tokenBridge"
      | "transferOwnership"
      | "withdrawFromFeeTank"
      | "wormhole"
      | "wormholeRelayer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "controllerChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "controllerVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositToFeeTank",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "feeTank", values: [string]): string;
  encodeFunctionData(
    functionFragment: "generateKey",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "idempotencyKeyToTokenAmount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "quoteCrossChainMessage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "routerAdmins",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setControllerChainId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setControllerVault",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRegisteredSender",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "submitReceipt",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenBridge",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFromFeeTank",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "wormhole", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wormholeRelayer",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "controllerChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "controllerVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositToFeeTank",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeTank", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "generateKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "idempotencyKeyToTokenAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quoteCrossChainMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "routerAdmins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setControllerChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setControllerVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRegisteredSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitReceipt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFromFeeTank",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wormhole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wormholeRelayer",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "ReceiptProcessed(bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReceiptProcessed"): EventFragment;
}

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

export interface ReceiptProcessedEventObject {
  idempotencyKey: string;
  usedTokens: BigNumber;
}
export type ReceiptProcessedEvent = TypedEvent<
  [string, BigNumber],
  ReceiptProcessedEventObject
>;

export type ReceiptProcessedEventFilter =
  TypedEventFilter<ReceiptProcessedEvent>;

export interface CustomRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CustomRouterInterface;

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
    controller(overrides?: CallOverrides): Promise<[string]>;

    controllerChainId(overrides?: CallOverrides): Promise<[number]>;

    controllerVault(overrides?: CallOverrides): Promise<[string]>;

    depositToFeeTank(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    feeTank(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    generateKey(
      requestHash: BytesLike,
      fixedNonce: BigNumberish,
      operationType: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    idempotencyKeyToTokenAmount(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    quoteCrossChainMessage(
      targetChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { cost: BigNumber }>;

    registerAdmin(
      admin: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    routerAdmins(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    setController(
      _controller: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setControllerChainId(
      _controllerChainId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setControllerVault(
      _controllerVault: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setRegisteredSender(
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    submitReceipt(
      idempotencyKey: BytesLike,
      usedTokens: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    tokenBridge(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawFromFeeTank(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    wormhole(overrides?: CallOverrides): Promise<[string]>;

    wormholeRelayer(overrides?: CallOverrides): Promise<[string]>;
  };

  controller(overrides?: CallOverrides): Promise<string>;

  controllerChainId(overrides?: CallOverrides): Promise<number>;

  controllerVault(overrides?: CallOverrides): Promise<string>;

  depositToFeeTank(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  feeTank(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  generateKey(
    requestHash: BytesLike,
    fixedNonce: BigNumberish,
    operationType: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  idempotencyKeyToTokenAmount(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  quoteCrossChainMessage(
    targetChain: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  registerAdmin(
    admin: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  routerAdmins(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  setController(
    _controller: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setControllerChainId(
    _controllerChainId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setControllerVault(
    _controllerVault: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setRegisteredSender(
    sourceChain: BigNumberish,
    sourceAddress: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  submitReceipt(
    idempotencyKey: BytesLike,
    usedTokens: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  tokenBridge(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawFromFeeTank(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  wormhole(overrides?: CallOverrides): Promise<string>;

  wormholeRelayer(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    controller(overrides?: CallOverrides): Promise<string>;

    controllerChainId(overrides?: CallOverrides): Promise<number>;

    controllerVault(overrides?: CallOverrides): Promise<string>;

    depositToFeeTank(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    feeTank(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    generateKey(
      requestHash: BytesLike,
      fixedNonce: BigNumberish,
      operationType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    idempotencyKeyToTokenAmount(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    quoteCrossChainMessage(
      targetChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerAdmin(admin: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    routerAdmins(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    setController(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setControllerChainId(
      _controllerChainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setControllerVault(
      _controllerVault: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRegisteredSender(
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    submitReceipt(
      idempotencyKey: BytesLike,
      usedTokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    tokenBridge(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawFromFeeTank(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    wormhole(overrides?: CallOverrides): Promise<string>;

    wormholeRelayer(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "ReceiptProcessed(bytes32,uint256)"(
      idempotencyKey?: BytesLike | null,
      usedTokens?: null
    ): ReceiptProcessedEventFilter;
    ReceiptProcessed(
      idempotencyKey?: BytesLike | null,
      usedTokens?: null
    ): ReceiptProcessedEventFilter;
  };

  estimateGas: {
    controller(overrides?: CallOverrides): Promise<BigNumber>;

    controllerChainId(overrides?: CallOverrides): Promise<BigNumber>;

    controllerVault(overrides?: CallOverrides): Promise<BigNumber>;

    depositToFeeTank(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    feeTank(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    generateKey(
      requestHash: BytesLike,
      fixedNonce: BigNumberish,
      operationType: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    idempotencyKeyToTokenAmount(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    quoteCrossChainMessage(
      targetChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerAdmin(
      admin: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    routerAdmins(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    setController(
      _controller: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setControllerChainId(
      _controllerChainId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setControllerVault(
      _controllerVault: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setRegisteredSender(
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    submitReceipt(
      idempotencyKey: BytesLike,
      usedTokens: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    tokenBridge(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawFromFeeTank(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    wormhole(overrides?: CallOverrides): Promise<BigNumber>;

    wormholeRelayer(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    controllerChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    controllerVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositToFeeTank(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    feeTank(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    generateKey(
      requestHash: BytesLike,
      fixedNonce: BigNumberish,
      operationType: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    idempotencyKeyToTokenAmount(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    quoteCrossChainMessage(
      targetChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerAdmin(
      admin: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    routerAdmins(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setController(
      _controller: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setControllerChainId(
      _controllerChainId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setControllerVault(
      _controllerVault: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setRegisteredSender(
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    submitReceipt(
      idempotencyKey: BytesLike,
      usedTokens: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenBridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawFromFeeTank(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    wormhole(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wormholeRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
