import * as SocketIO from "socket.io";
import {InjectorService} from "../../common/di";

/**
 * @experimental
 */
export interface SocketIOServer extends SocketIO.Server {
}

/**
 * @experimental
 */
export const SocketIOServer = Symbol("SocketIOServer");

InjectorService.factory(SocketIOServer, SocketIO());