package mrs.eclinicapi.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.voodoodyne.jackson.jsog.JSOGGenerator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@MappedSuperclass
@JsonIdentityInfo(generator = JSOGGenerator.class)

public class MedicalStaff {

    @Id
    @Column(length = 50)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq")
    @GenericGenerator(name = "seq", strategy = "mrs.eclinicapi.generator.IdGenerator")
    private String id;

    /*ovde nije CascadeType.ALL da ne bi kada obrises doctor/nurse bili i
    user i clinic obrisani iz svojih tabela*/
    //@OneToOne(cascade = {CascadeType.PERSIST})
    @OneToOne(cascade = CascadeType.ALL)
    private User user;

    @ManyToOne(cascade = {CascadeType.PERSIST}, fetch = FetchType.EAGER)
    private Clinic clinic;

    @Override
    public String toString() {
        return "MedicalStaff [id=" + id + ", user=" + user + ", clinic=" + clinic + "]";
    }
}
