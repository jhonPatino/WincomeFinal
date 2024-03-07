import { Movement } from "./Movement";

export const MovementList = ({ movements, handleDelete }) => {
  return (
    <div className="flex flex-col">
      {movements.map((movement) => {
        return (
          <Movement
            key={movement.id}
            movement={movement}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};
