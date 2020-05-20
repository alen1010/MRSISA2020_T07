package mrs.eclinicapi.DTO;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.voodoodyne.jackson.jsog.JSOGGenerator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mrs.eclinicapi.model.InterventionType;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(generator = JSOGGenerator.class)
public class DoctorNurseDTO {

    String id;
    String userID;
    String email;
    String password;
    String name;
    String surname;
    String phoneNumber;
    String address;
    String city;
    String country;
    String personalID;
    String clinicID;
    List<String> specialties;
	@Override
	public String toString() {
		return "DoctorNurseDTO [id=" + id + ", userID=" + userID + ", email=" + email + ", password=" + password
				+ ", name=" + name + ", surname=" + surname + ", phoneNumber=" + phoneNumber + ", address=" + address
				+ ", city=" + city + ", country=" + country + ", personalID=" + personalID + ", clinicID=" + clinicID
				+ ", specialties=" + specialties + "]";
	}


}
