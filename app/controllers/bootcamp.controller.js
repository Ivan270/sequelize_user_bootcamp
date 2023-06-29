import Bootcamp from '../models/Bootcamp.model.js';

//////////////////LISTAR TODOS LOS BOOTCAMP///////////////////////
export const findAll = async (req, res) => {
	try {
		let bootcamps = await Bootcamp.findAll();
		res.send({
			code: 200,
			data: bootcamps,
		});
	} catch (error) {
		res.status(500).send({
			code: 500,
			message: 'Error al consultar el curso de bootcamp',
		});
	}
};

//////////////////// CREAR BOOTCAMP/////////////////
export const createBootcamp = async (req, res) => {
	try {
		let { title, cue, description } = req.body;
		const nuevoBootcamp = await Bootcamp.create({
			title,
			cue,
			description,
		});

		res.status(201).send({
			code: 201,
			message: 'Bootcamp se ha creado con el ID: ' + nuevoBootcamp.id,
		});
	} catch (error) {
		res.status(500).send({
			code: 500,
			messege: error.message,
		});
	}
};

///////////////////FIND POR ID//////////////////////////

export const findById = async (req, res) => {
	try {
		let { id } = req.params;
		// let { nombre, email, password } = req.body;
		let bootcampConsultado = await Bootcamp.findByPk(id);

		res.status(200).send({
			code: 200,
			data: bootcampConsultado,
			message: `Bootcamp ID: ${id} se muestra con éxito`,
		});
	} catch (error) {
		res.status(500).send({
			code: 500,
			messege: 'No se pudo mostrar al bootcamp',
		});
	}
};
