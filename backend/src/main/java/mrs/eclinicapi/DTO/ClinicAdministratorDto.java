package mrs.eclinicapi.DTO;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.voodoodyne.jackson.jsog.JSOGGenerator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import mrs.eclinicapi.model.ClinicAdministrator;

@Getter
@Setter
@AllArgsConstructor
@JsonIdentityInfo(generator = JSOGGenerator.class)

public class ClinicAdministratorDto extends UserDTO {


    public ClinicAdministratorDto(ClinicAdministrator clinicAdministrator, int i) {
        super();
        this.id = clinicAdministrator.getId();
        this.password = clinicAdministrator.getUser().getPassword();
        this.surname = clinicAdministrator.getUser().getSurname();
        this.name = clinicAdministrator.getUser().getName();
        this.type = clinicAdministrator.getUser().getType();
        this.clinic = clinicAdministrator.getClinic();
        this.email = clinicAdministrator.getUser().getEmail();
        this.city = clinicAdministrator.getUser().getCity();
        this.country = clinicAdministrator.getUser().getCountry();
        this.userID = clinicAdministrator.getUser().getId();
        this.address = clinicAdministrator.getUser().getAddress();
        this.personalID = clinicAdministrator.getUser().getPersonalID(); //JMBG
    }

    @Override
    public String toString() {
        return "ClinicAdministratorDto{" +
                "id='" + id + '\'' +
                ", password='" + password + '\'' +
                ", surname='" + surname + '\'' +
                ", name='" + name + '\'' +
                ", type=" + type +
                ", clinic=" + clinic +
                ", email='" + email + '\'' +
                ", userID='" + userID + '\'' +
                ", city='" + city + '\'' +
                ", country='" + country + '\'' +
                ", address='" + address + '\'' +
                ", personalID='" + personalID + '\'' +
                '}';
    }
}
