import React from 'react';

interface PlayerCircleProps {
  initials: string;
  name: string;
  number?: number;
  showNumberOutside?: boolean;
  stackNameBelow?: boolean;
}

const PlayerCircle: React.FC<PlayerCircleProps> = ({
  initials,
  name,
  number,
  showNumberOutside = false,
  stackNameBelow = false,
}) => {
  const circle = (
    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
      <span className="text-white font-bold text-sm">{initials}</span>
    </div>
  );

  const numberElement = showNumberOutside && number ? (
    <p className="text-black font-medium">{number}</p>
  ) : null;

  const nameElement = <p className="text-gray-600 text-sm">{name}</p>;

  return (
    <div
      className={`flex items-center ${
        stackNameBelow ? 'flex-col gap-2' : 'flex-row gap-4'
      }`}
    >
      {stackNameBelow ? (
        // Pitch View: Circle above, name below
        <>
          {circle}
          <div className="text-center">{nameElement}</div>
        </>
      ) : (
        // List View: Number | Circle | Name
        <>
          {numberElement}
          {circle}
          {nameElement}
        </>
      )}
    </div>
  );
};

export default PlayerCircle;