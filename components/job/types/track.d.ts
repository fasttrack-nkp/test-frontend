export interface TrackTypeBasic {
  id: string;
  HN: string;
}

export interface TrackType extends TrackTypeBasic {
  countAll: number;
  countPending: number;
  countSuccess: number;
}
