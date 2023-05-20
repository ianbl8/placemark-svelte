<script>
  import { goto } from "$app/navigation";
  import { placemarkService } from "../../services/placemark-services.js";

  placemarkService.logout();
  goto("/");
</script>