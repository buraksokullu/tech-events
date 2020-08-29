const required = value => (value || typeof value === 'number' ? undefined : 'Boş geçilemez.');

export default required;
