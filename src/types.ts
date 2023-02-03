import { IsomorphicRequest, IsomorphicResponse } from '@mswjs/interceptors';

interface HeaderOptionType {
  headers: {
    'Content-Type': string;
    Authorization: string;
  };
}

interface RequestType {
  id: string;
  method: string;
  origin: string;
  protocol: string;
  hostname: string;
  host: string;
  pathname: string;
  search: string;
  body: string;
  requestedAt: Date;
}

interface ResponseType {
  status: number;
  body: string;
  respondedAt: Date;
}

interface OptionsType {
  flushInterval: number;
  cacheTtl: number;
  baseUrl: string;
  hashBody: boolean;
  eventSinkUrl: string; // Defaults to {baseUrl}/api/events if not provided
  errorSinkUrl: string; // Defaults to {baseUrl}/api/errors if not provided
}

interface EventRequestType {
  request: RequestType;
  response: ResponseType;
}

// interface EventResponseType {}

interface ErrorRequestType {
  error: Error;
  payload: InfoPayloadType;
  message: string;
}

// interface ErrorResponseType {}

interface InfoPayloadType {
  options: OptionsType;
  request?: IsomorphicRequest;
  response?: IsomorphicResponse;
  data?: EventRequestType[];
  packageName?: string;
  packageVersion?: string;
}

interface LoggerType {
  error: (message: string, payload: InfoPayloadType, error: Error) => void;
  info: (message: string, payload?: InfoPayloadType) => void;
}

export {
  HeaderOptionType,
  RequestType,
  ResponseType,
  EventRequestType,
  InfoPayloadType,
  LoggerType,
  OptionsType
};