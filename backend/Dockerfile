FROM node:20-alpine3.19 as base

FROM base as builder

WORKDIR /backend

COPY package*.json .

COPY tsconfig.json .

RUN npm install

COPY src src

RUN npm run build

FROM base as runner

WORKDIR /backend

COPY --from=builder /backend/dist dist/

COPY --from=builder /backend/package*.json .

RUN npm install --omit=dev

RUN addgroup --system --gid 1001 backenduser

RUN adduser --system --uid 1001 backenduser

USER backenduser

CMD ["npm","run","start"]