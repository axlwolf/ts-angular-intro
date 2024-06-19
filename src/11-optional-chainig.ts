export interface Passenger {
  name: string;
  children?: string[];
}

export const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;

  console.log({ howManyChildren });
};

export const returnChildNumnber = (passenger: Passenger): number => {
  if (!passenger.children) return 0;
  const howManyChildren = passenger.children!.length;

  console.log({ howManyChildren });
  return howManyChildren;
};
