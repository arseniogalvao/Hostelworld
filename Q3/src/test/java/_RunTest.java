import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by arseniogalvao on 01/05/17.
 */

@RunWith(Cucumber.class)
@Cucumber.Options(
        features={"src/test/resources/HostelWorld.feature"}
        //,glue={"src/test/java/com/example/XPTO.java"}
        ,format={"html:reports/test-report"
        ,"json:reports/test-report/cucumber.json"
        ,"junit:reports/test-report/testng-results.xml"
}
        ,dryRun = false
)
public class _RunTest {
}
