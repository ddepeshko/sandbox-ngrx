export enum EProductStatuses {
  New = 'NEW',
  Used = 'USED',
  Refurbished = 'REFURBISHED'
}

export enum EProductStatusesNames {
  New = 'Новый',
  Used = 'Б/У',
  Refurbished = 'После ремонта'
}

export enum EProductStatusesClassNames {
  New = 'new',
  Used = 'used',
  Refurbished = 'refurbished'
}

export const statusesList: Map<string, string> = new Map([
  [EProductStatuses.New, EProductStatusesNames.New],
  [EProductStatuses.Used, EProductStatusesNames.Used],
  [EProductStatuses.Refurbished, EProductStatusesNames.Refurbished],
]);

export const statusesClassList: Map<string, string> = new Map([
  [EProductStatuses.New, EProductStatusesClassNames.New],
  [EProductStatuses.Used, EProductStatusesClassNames.Used],
  [EProductStatuses.Refurbished, EProductStatusesClassNames.Refurbished],
]);
