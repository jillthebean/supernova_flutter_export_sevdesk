import { Eta } from "eta";

export function renderIconsFile(eta: Eta, data: IconsTemplateData): string {
  return eta.renderString(iconsTemplate, data);
}

export type IconsTemplateData = {
  className: string,
  fontFamily: string,
  variables: Record<string, string>,
}

const iconsTemplate = `import 'package:flutter/widgets.dart';

@staticIconProvider
abstract final class <%=it.className%> {
  <% for (var name in it.variables) {%>

  /// <i class="sev-icons md-36"><%=name%></i> &#x2014; sev icon named "<%=name%>".
  static const IconData <%=name%> = IconData(0x<%=it.variables[name]%>, fontFamily: 'SevIcons');
  <% } %>
}
`

