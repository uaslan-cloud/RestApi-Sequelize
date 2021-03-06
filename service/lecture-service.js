import * as lectureRepository from '../persistency/lecture-repository.js'


export async function createLecture(pLecture){
    return await lectureRepository.create(pMovie);
}

export async function deleteLecture(pId){
    return await lectureRepository.remove(pId);
}

export async function getAllLectures(){
    return await lectureRepository.getAll();
}

export async function getLecturesbyId(pId){
    let lecture = await lectureRepository.findById(pId)
    return lecture;
}

export async function updateLecture(pId, pUpdateMovie){
    let lecture = await lectureRepository.updateMovie(pId, pUpdateMovie);
    return lecture;
}
