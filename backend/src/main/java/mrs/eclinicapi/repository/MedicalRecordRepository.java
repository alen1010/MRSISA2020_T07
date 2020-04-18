package mrs.eclinicapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mrs.eclinicapi.model.MedicalRecord;

public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Long>{

}
