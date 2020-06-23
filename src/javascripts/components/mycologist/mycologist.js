const mycologistMaker = (mycologist) => {
  const domString = `
    <div class="col-3">
      <div class="card">
        <div class="card-body">
          <div class ="card-header">${mycologist.name}</div>
          <p class="card-text">${mycologist.age}</p>
        </div>
      </div>
    </div>
  `;

  return domString;
};

export default { mycologistMaker };
