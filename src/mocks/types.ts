//example
export type Favorite = {
  id: string;
  mint: string;
  choco: string;
};
export type Invite = {
  status: number;
  success: boolean;
  message: string;
  data: {
    id: number;
    teamName: string;
    teamMember: number;
    teamCode: string;
  };
};
export type TeamData = {
  teamName: string;
  teamMember: number;
};
export type TeamScore = {
  grade: number;
  questionType: string;
};
export type TeamScoreResponse = {
  status: number;
  success: boolean;
  message: string;
  data: TeamScore[];
};
